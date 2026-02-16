<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let recipes = [];
  let filteredRecipes = [];
  let searchQuery = '';
  let selectedRecipe = null;
  let currentUser = null;
  let showAuthDialog = false;
  let showCreateDialog = false;

  let loginEmail = '';
  let loginPassword = '';
  let registerName = '';
  let registerEmail = '';
  let registerPassword = '';
  let registerConfirmPassword = '';
  let authError = '';
  let isLoading = false;

  let loginTab = true;
  let newComment = '';
  let selectedRating = 0;

  // Create recipe form variables
  let newRecipeTitle = '';
  let newRecipeDescription = '';
  let newRecipeIngredients = '';
  let newRecipeInstructions = '';
  let newRecipeCookTime = 30;
  let newRecipeServings = 4;
  let newRecipeImageUrl = '';

  async function checkSession() {
    try {
      const response = await fetch('/api/auth/me');
      const data = await response.json();

      if (data.authenticated && data.user) {
        currentUser = data.user;
      } else {
        currentUser = null;
      }
    } catch (error) {
      console.error('Error checking session:', error);
      currentUser = null;
    }
  }

  async function fetchRecipes() {
    try {
      const response = await fetch('/api/recipes');
      recipes = await response.json();
      filterRecipes();
    } catch (error) {
      console.error('Error fetching recipes:', error);
      recipes = [];
    }
  }

  function filterRecipes() {
    if (!searchQuery) {
      filteredRecipes = recipes;
      return;
    }

    const query = searchQuery.toLowerCase();
    filteredRecipes = recipes.filter(recipe =>
      recipe.ingredients.toLowerCase().includes(query) ||
      recipe.title.toLowerCase().includes(query)
    );
  }

  function openRecipe(recipe) {
    selectedRecipe = recipe;
  }

  function closeRecipe() {
    selectedRecipe = null;
  }

  async function handleLogin(e) {
    e.preventDefault();
    isLoading = true;
    authError = '';

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        currentUser = data.user;
        showAuthDialog = false;
        loginEmail = '';
        loginPassword = '';
      } else {
        authError = data.error || 'Login failed';
      }
    } catch (error) {
      authError = 'An error occurred';
    } finally {
      isLoading = false;
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    isLoading = true;
    authError = '';

    if (registerPassword !== registerConfirmPassword) {
      authError = 'Passwords do not match';
      isLoading = false;
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword,
          name: registerName || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        currentUser = data.user;
        showAuthDialog = false;
        registerName = '';
        registerEmail = '';
        registerPassword = '';
        registerConfirmPassword = '';
      } else {
        authError = data.error || 'Registration failed';
      }
    } catch (error) {
      authError = 'An error occurred';
    } finally {
      isLoading = false;
    }
  }

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      currentUser = null;
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  async function rateRecipe(rating) {
    if (!selectedRecipe || !currentUser) return;
    // Just set the selected rating, don't submit yet
    selectedRating = rating;
  }

  async function submitRating() {
    if (!selectedRecipe || !currentUser || selectedRating === 0) return;
    try {
      const response = await fetch(`/api/recipes/${selectedRecipe.id}/ratings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: selectedRating }),
      });
      if (response.ok) {
        const data = await response.json();
        await fetchRecipes();
        const updatedRecipe = recipes.find(r => r.id === selectedRecipe.id);
        if (updatedRecipe) {
          selectedRecipe = { ...selectedRecipe, avgRating: data.avgRating, _count: updatedRecipe._count };
        }
        // Reset selected rating after successful submission
        selectedRating = 0;
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to submit rating');
      }
    } catch (error) {
      console.error('Error rating recipe:', error);
      alert('An error occurred while rating the recipe');
    }
  }

  async function submitComment() {
    if (!selectedRecipe || !currentUser || !newComment.trim()) return;
    try {
      const response = await fetch(`/api/recipes/${selectedRecipe.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newComment }),
      });
      if (response.ok) {
        newComment = '';
        await fetchRecipes();
        const updatedRecipe = recipes.find(r => r.id === selectedRecipe.id);
        if (updatedRecipe && updatedRecipe.comments) {
          selectedRecipe = { ...selectedRecipe, comments: updatedRecipe.comments };
        }
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  }

  async function deleteRecipe(recipeId) {
    if (!confirm('Are you sure you want to delete this recipe?')) return;
    try {
      const response = await fetch(`/api/recipes/${recipeId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        closeRecipe();
        await fetchRecipes();
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  }

  function editRecipe(recipe) {
    // For now, just close the modal. In a full implementation, this would open an edit form.
    alert('Edit functionality coming soon!');
    closeRecipe();
  }

  async function createRecipe(e) {
    e.preventDefault();
    if (!currentUser) return;

    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newRecipeTitle,
          description: newRecipeDescription,
          ingredients: newRecipeIngredients,
          instructions: newRecipeInstructions,
          cookTime: parseInt(newRecipeCookTime),
          servings: parseInt(newRecipeServings),
          imageUrl: newRecipeImageUrl || undefined,
        }),
      });

      if (response.ok) {
        showCreateDialog = false;
        // Reset form
        newRecipeTitle = '';
        newRecipeDescription = '';
        newRecipeIngredients = '';
        newRecipeInstructions = '';
        newRecipeCookTime = 30;
        newRecipeServings = 4;
        newRecipeImageUrl = '';
        await fetchRecipes();
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to create recipe');
      }
    } catch (error) {
      console.error('Error creating recipe:', error);
      alert('An error occurred while creating the recipe');
    }
  }

  function closeCreateDialog() {
    showCreateDialog = false;
    // Reset form
    newRecipeTitle = '';
    newRecipeDescription = '';
    newRecipeIngredients = '';
    newRecipeInstructions = '';
    newRecipeCookTime = 30;
    newRecipeServings = 4;
    newRecipeImageUrl = '';
  }

  onMount(() => {
    checkSession();
    fetchRecipes();
  });

  $: if (searchQuery !== undefined) {
    filterRecipes();
  }
</script>

<div class="container">
  <!-- Header -->
  <header class="header">
    <div class="header-content">
      <h1 class="logo">
        <span class="chef-icon">👨‍🍳</span>
        RecipeHub
      </h1>

      <div class="search-section">
        <input
          type="text"
          placeholder="Search by ingredients or recipe name..."
          class="search-input"
          bind:value={searchQuery}
        />
      </div>

      {#if currentUser}
        <div class="user-actions">
          <div class="user-info">
            <span class="avatar">
              {currentUser.name?.[0] || currentUser.email[0].toUpperCase()}
            </span>
            <span class="user-name">{currentUser.name || currentUser.email}</span>
          </div>
          <button class="create-button" on:click={() => showCreateDialog = true}>+ New Recipe</button>
          <button class="logout-button" on:click={handleLogout}>Logout</button>
        </div>
      {:else}
        <button class="login-button" on:click={() => showAuthDialog = true}>Sign In</button>
      {/if}
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-content">
    {#if filteredRecipes.length === 0}
      <div class="empty-state">
        <div class="empty-icon">🍳</div>
        <h2 class="empty-title">
          {searchQuery ? 'No recipes found' : 'No recipes yet'}
        </h2>
        <p class="empty-description">
          {searchQuery ? 'Try different keywords' : 'Be the first to share a recipe!'}
        </p>
        {#if !currentUser}
          <p class="login-prompt">Sign in to create recipes</p>
        {:else}
          <button class="button" on:click={() => showCreateDialog = true}>Create Recipe</button>
        {/if}
      </div>
    {:else}
      <div class="recipes-grid">
        {#each filteredRecipes as recipe (recipe)}
          <div class="recipe-card" on:click={() => openRecipe(recipe)} role="button" tabindex="0">
            {#if recipe.imageUrl}
              <div class="recipe-image">
                <img src={recipe.imageUrl} alt={recipe.title} />
              </div>
            {/if}
            <div class="recipe-content">
              <h3 class="recipe-title">{recipe.title}</h3>
              <p class="recipe-description">{recipe.description}</p>
              <div class="recipe-meta">
                <div class="meta-item">⏱️ {recipe.cookTime} min</div>
                <div class="meta-item">👥 {recipe.servings} servings</div>
              </div>
              <div class="recipe-stats">
                <div class="rating">
                  {#each { count: 5 } as i}
                    <span class={i <= recipe.avgRating ? 'star-filled' : 'star-empty'}>★</span>
                  {/each}
                </div>
                <div class="comment-count">💬 {recipe._count.comments}</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </main>

  <!-- Recipe Detail Dialog -->
  {#if selectedRecipe}
    <div class="modal-overlay" on:click={closeRecipe} role="dialog">
      <div class="modal-content" on:click|stopPropagation>
        <button class="close-button" on:click={closeRecipe}>×</button>

        {#if selectedRecipe.imageUrl}
          <div class="detail-image">
            <img src={selectedRecipe.imageUrl} alt={selectedRecipe.title} />
          </div>
        {/if}

        <div class="detail-content">
          <h2 class="detail-title">{selectedRecipe.title}</h2>
          <p class="detail-author">By {selectedRecipe.author.name || selectedRecipe.author.email}</p>

          <div class="detail-meta">
            <div class="meta-item">⏱️ {selectedRecipe.cookTime} minutes</div>
            <div class="meta-item">👥 {selectedRecipe.servings} servings</div>
            <div class="rating-large">
              {#each { count: 5 } as i}
                <span class={i <= selectedRecipe.avgRating ? 'star-filled' : 'star-empty'}>★</span>
              {/each}
              <span>({selectedRecipe._count.ratings})</span>
            </div>
          </div>

          <p class="detail-description">{selectedRecipe.description}</p>

          <div class="detail-section">
            <h3>Ingredients</h3>
            <ul class="ingredients-list">
              {#each selectedRecipe.ingredients.split('\n') as ingredient}
                {#if ingredient.trim()}
                  <li>{ingredient}</li>
                {/if}
              {/each}
            </ul>
          </div>

          <div class="detail-section">
            <h3>Instructions</h3>
            <div class="instructions-text">{selectedRecipe.instructions}</div>
          </div>

          <hr class="divider" />

          <!-- Comments Section -->
          <div class="detail-section">
            <h3>Comments ({selectedRecipe.comments.length})</h3>

            {#if currentUser}
              <div class="comment-input-section">
                <textarea
                  placeholder="Add a comment..."
                  class="comment-textarea"
                  bind:value={newComment}
                ></textarea>
                <button
                  class="button submit-button"
                  on:click={submitComment}
                >
                  Post Comment
                </button>
              </div>
            {:else}
              <p class="login-prompt">Sign in to comment</p>
            {/if}

            <div class="comments-list">
              {#each selectedRecipe.comments as comment}
                <div class="comment">
                  <div class="comment-avatar">
                    {comment.user.name?.[0] || comment.user.email[0]}
                  </div>
                  <div class="comment-body">
                    <div class="comment-author">
                      {comment.user.name || comment.user.email}
                    </div>
                    <div class="comment-text">{comment.text}</div>
                    <div class="comment-date">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <hr class="divider" />

          <!-- Edit/Delete Buttons -->
          {#if currentUser && selectedRecipe.canEdit}
            <div class="detail-actions">
              <button class="button edit-button" on:click={() => editRecipe(selectedRecipe)}>
                Edit Recipe
              </button>
              <button class="button delete-button" on:click={() => deleteRecipe(selectedRecipe.id)}>
                Delete Recipe
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}

  <!-- Auth Dialog -->
  {#if showAuthDialog}
    <div class="modal-overlay" on:click={() => showAuthDialog = false} role="dialog">
      <div class="modal-content auth-modal" on:click|stopPropagation>
        <button class="close-button" on:click={() => showAuthDialog = false}>×</button>

        <div class="auth-tabs">
          <button class="tab-button {loginTab ? 'active' : ''}" on:click={() => loginTab = true}>
            Login
          </button>
          <button class="tab-button {!loginTab ? 'active' : ''}" on:click={() => loginTab = false}>
            Register
          </button>
        </div>

        {#if authError}
          <div class="auth-error">{authError}</div>
        {/if}

        {#if loginTab}
          <form class="auth-form" on:submit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              class="input"
              bind:value={loginEmail}
              required
            />
            <input
              type="password"
              placeholder="Password"
              class="input"
              bind:value={loginPassword}
              required
            />
            <button type="submit" class="button" disabled={isLoading}>
              {isLoading ? '...' : 'Sign In'}
            </button>
          </form>
        {:else}
          <form class="auth-form" on:submit={handleRegister}>
            <input
              type="text"
              placeholder="Name (optional)"
              class="input"
              bind:value={registerName}
            />
            <input
              type="email"
              placeholder="Email"
              class="input"
              bind:value={registerEmail}
              required
            />
            <input
              type="password"
              placeholder="Password"
              class="input"
              bind:value={registerPassword}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              class="input"
              bind:value={registerConfirmPassword}
              required
            />
            <button type="submit" class="button" disabled={isLoading}>
              {isLoading ? '...' : 'Create Account'}
            </button>
          </form>
        {/if}
      </div>
    </div>
  {/if}

  <!-- Create Recipe Dialog -->
  {#if showCreateDialog}
    <div class="modal-overlay" on:click={closeCreateDialog} role="dialog">
      <div class="modal-content create-modal" on:click|stopPropagation>
        <button class="close-button" on:click={closeCreateDialog}>×</button>
        <h2 class="modal-title">Create New Recipe</h2>
        <form class="create-form" on:submit={createRecipe}>
          <div class="form-group">
            <label for="title">Recipe Title *</label>
            <input
              type="text"
              id="title"
              class="input"
              bind:value={newRecipeTitle}
              required
              placeholder="e.g., Homemade Pasta Carbonara"
            />
          </div>
          <div class="form-group">
            <label for="description">Description *</label>
            <textarea
              id="description"
              class="textarea"
              bind:value={newRecipeDescription}
              required
              placeholder="Brief description of your recipe"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="ingredients">Ingredients *</label>
            <textarea
              id="ingredients"
              class="textarea"
              bind:value={newRecipeIngredients}
              required
              placeholder="Enter each ingredient on a new line"
              rows="6"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="instructions">Instructions *</label>
            <textarea
              id="instructions"
              class="textarea"
              bind:value={newRecipeInstructions}
              required
              placeholder="Step-by-step cooking instructions"
              rows="6"
            ></textarea>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="cookTime">Cook Time (minutes) *</label>
              <input
                type="number"
                id="cookTime"
                class="input"
                bind:value={newRecipeCookTime}
                required
                min="1"
              />
            </div>
            <div class="form-group">
              <label for="servings">Servings *</label>
              <input
                type="number"
                id="servings"
                class="input"
                bind:value={newRecipeServings}
                required
                min="1"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="imageUrl">Image URL (optional)</label>
            <input
              type="url"
              id="imageUrl"
              class="input"
              bind:value={newRecipeImageUrl}
              placeholder="https://example.com/recipe-image.jpg"
            />
          </div>
          <div class="form-actions">
            <button type="button" class="button button-secondary" on:click={closeCreateDialog}>Cancel</button>
            <button type="submit" class="button">Create Recipe</button>
          </div>
        </form>
      </div>
    </div>
  {/if}

  <style>
    .header {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #f97316;
    }

    .chef-icon {
      font-size: 2rem;
    }

    .user-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }

    .avatar {
      width: 2.5rem;
      height: 2.5rem;
      background: linear-gradient(135deg, #f97316, #ea580c);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
      border-radius: 50%;
    }

    .user-name {
      font-weight: 500;
    }

    .logout-button {
      padding: 0.5rem 1rem;
      background: #ef4444;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      font-weight: 500;
    }

    .login-button {
      padding: 0.5rem 1.5rem;
      background: #f97316;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      font-weight: 500;
    }

    .search-section {
      flex: 1;
      max-width: 600px;
      margin: 0 1.5rem;
    }

    .search-input {
      padding: 0.875rem 1.25rem;
      border: 2px solid #e5e7eb;
      border-radius: 0.5rem;
      font-size: 1rem;
      width: 100%;
    }

    .search-input:focus {
      outline: none;
      border-color: #f97316;
    }

    .main-content {
      padding: 2.5rem 0;
    }

    .empty-state {
      text-align: center;
      padding: 5rem 2rem;
    }

    .empty-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .empty-title {
      font-size: 1.5rem;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    .empty-description {
      color: #6b7280;
      margin-bottom: 1rem;
    }

    .recipes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .recipe-card {
      background: white;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
      cursor: pointer;
    }

    .recipe-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .recipe-image {
      width: 100%;
      aspect-ratio: 16/9;
      overflow: hidden;
      background: #f8f9fa;
    }

    .recipe-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .recipe-content {
      padding: 1.5rem;
    }

    .recipe-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.75rem;
      line-height: 1.4;
      padding: 0.25rem 0;
    }

    .recipe-description {
      color: #6b7280;
      margin-bottom: 1rem;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: 0.25rem 0;
    }

    .recipe-meta {
      display: flex;
      gap: 1rem;
      font-size: 0.875rem;
      color: #6b7280;
      margin-bottom: 0.75rem;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .rating {
      display: flex;
      gap: 0.25rem;
    }

    .star-filled {
      color: #fbbf24;
    }

    .star-empty {
      color: #d1d5db;
    }

    .comment-count {
      font-size: 1.5rem;
    }

    .recipe-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 2rem;
    }

    .modal-content {
      background: white;
      border-radius: 1rem;
      max-width: 800px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      position: relative;
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #6b7280;
      color: white;
      border: none;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .detail-image {
      width: 100%;
      max-height: 50vh;
      overflow: auto;
      background: #f8f9fa;
    }

    .detail-image img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
    }

    .detail-content {
      padding: 2.5rem;
    }

    .detail-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.75rem;
      line-height: 1.2;
      padding: 0.5rem 0;
    }

    .detail-author {
      color: #6b7280;
      font-size: 0.875rem;
      margin-bottom: 1.25rem;
      padding: 0 0.5rem;
    }

    .detail-meta {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1.75rem;
      font-size: 1rem;
      padding: 0.5rem 0;
    }

    .rating-large {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .detail-description {
      color: #374151;
      line-height: 1.7;
      margin-bottom: 1.75rem;
      padding: 0.5rem 0;
    }

    .detail-section {
      margin-bottom: 2rem;
    }

    .detail-section h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1rem;
      padding: 0.25rem 0;
    }

    .divider {
      border: none;
      border-top: 1px solid #e5e7eb;
      margin: 1.5rem 0;
    }

    .ingredients-list {
      list-style: none;
      padding: 0;
      background: #f8f9fa;
      border-radius: 0.5rem;
      padding: 2rem;
    }

    .ingredients-list li {
      padding: 0.75rem 0;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      gap: 0.5rem;
      line-height: 1.6;
    }

    .ingredients-list li:last-child {
      border-bottom: none;
    }

    .instructions-text {
      background: #f8f9fa;
      border-radius: 0.5rem;
      padding: 2rem;
      white-space: pre-line;
      line-height: 1.7;
    }

    .rating-input {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
      align-items: center;
    }

    .star-button {
      font-size: 2rem;
      background: none;
      border: none;
      cursor: pointer;
      color: #d1d5db;
      transition: transform 0.1s;
      padding: 0.25rem;
    }

    .star-button:hover {
      transform: scale(1.2);
    }

    .star-button.selected {
      color: #fbbf24;
    }

    .submit-button {
      margin-left: 1rem;
      padding: 0.75rem 1.5rem;
    }

    .comment-input-section {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .comment-textarea {
      flex: 1;
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 0.5rem;
      font-family: inherit;
      font-size: 0.875rem;
      resize: vertical;
      line-height: 1.5;
    }

    .comment-textarea:focus {
      outline: none;
      border-color: #f97316;
    }

    .comments-list {
      max-height: 350px;
      overflow-y: auto;
    }

    .comment {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .comment-avatar {
      width: 2.5rem;
      height: 2.5rem;
      background: linear-gradient(135deg, #f97316, #ea580c);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .comment-body {
      flex: 1;
    }

    .comment-author {
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.25rem;
    }

    .comment-text {
      color: #374151;
      line-height: 1.6;
      padding: 0.25rem 0;
    }

    .comment-date {
      color: #6b7280;
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }

    .detail-actions {
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;
      padding-top: 1rem;
    }

    .edit-button {
      background: #3b82f6;
      color: white;
    }

    .delete-button {
      background: #ef4444;
      color: white;
    }

    .auth-modal {
      max-width: 400px;
    }

    .auth-tabs {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .tab-button {
      flex: 1;
      padding: 0.5rem 1rem;
      background: transparent;
      border: 2px solid #e5e7eb;
      border-radius: 0.25rem;
      cursor: pointer;
      font-weight: 500;
    }

    .tab-button.active {
      background: #f97316;
      color: white;
      border-color: #f97316;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .auth-error {
      background: #fef2f2;
      color: #ef4444;
      padding: 0.75rem 1rem;
      border-radius: 0.25rem;
      margin-bottom: 1rem;
    }

    .login-prompt {
      text-align: center;
      color: #6b7280;
      padding: 1rem;
    }

    /* Additional styles */
    .user-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .create-button {
      padding: 0.5rem 1rem;
      background: #f97316;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      font-weight: 500;
    }

    .button-secondary {
      background: #9ca3af;
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1.5rem;
    }

    .create-modal {
      max-width: 700px;
      max-height: 90vh;
      overflow-y: auto;
    }

    .create-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 500;
      color: #374151;
      font-size: 0.875rem;
    }

    .textarea {
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 0.5rem;
      font-family: inherit;
      font-size: 1rem;
      resize: vertical;
      line-height: 1.5;
    }

    .textarea:focus {
      outline: none;
      border-color: #f97316;
      box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.1);
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1rem;
    }

    .login-prompt {
      color: #6b7280;
      margin-top: 1rem;
    }
  </style>
</div>