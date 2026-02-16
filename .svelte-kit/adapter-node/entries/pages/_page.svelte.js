import { y as attr, z as ensure_array_like, F as attr_class, G as clsx } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { l as escape_html } from "../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let recipes = [];
    let filteredRecipes = [];
    let searchQuery = "";
    function filterRecipes() {
      {
        filteredRecipes = recipes;
        return;
      }
    }
    {
      filterRecipes();
    }
    $$renderer2.push(`<div class="container"><header class="header"><div class="header-content"><h1 class="logo"><span class="chef-icon">👨‍🍳</span> RecipeHub</h1> <div class="search-section"><input type="text" placeholder="Search by ingredients or recipe name..." class="search-input"${attr("value", searchQuery)}/></div> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button class="login-button">Sign In</button>`);
    }
    $$renderer2.push(`<!--]--></div></header> <main class="main-content">`);
    if (filteredRecipes.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="empty-state"><div class="empty-icon">🍳</div> <h2 class="empty-title">${escape_html("No recipes yet")}</h2> <p class="empty-description">${escape_html("Be the first to share a recipe!")}</p> `);
      {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="login-prompt">Sign in to create recipes</p>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="recipes-grid"><!--[-->`);
      const each_array = ensure_array_like(filteredRecipes);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let recipe = each_array[$$index_1];
        $$renderer2.push(`<div class="recipe-card" role="button" tabindex="0">`);
        if (recipe.imageUrl) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="recipe-image"><img${attr("src", recipe.imageUrl)}${attr("alt", recipe.title)}/></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="recipe-content"><h3 class="recipe-title">${escape_html(recipe.title)}</h3> <p class="recipe-description">${escape_html(recipe.description)}</p> <div class="recipe-meta"><div class="meta-item">⏱️ ${escape_html(recipe.cookTime)} min</div> <div class="meta-item">👥 ${escape_html(recipe.servings)} servings</div></div> <div class="recipe-stats"><div class="rating"><!--[-->`);
        const each_array_1 = ensure_array_like({ count: 5 });
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let i = each_array_1[$$index];
          $$renderer2.push(`<span${attr_class(clsx(i <= recipe.avgRating ? "star-filled" : "star-empty"))}>★</span>`);
        }
        $$renderer2.push(`<!--]--></div> <div class="comment-count">💬 ${escape_html(recipe._count.comments)}</div></div></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></main> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    $$renderer2.push(`<style>
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
  </style>`);
    $$renderer2.push(`</div>`);
  });
}
export {
  _page as default
};
