<template>
  
  <header>    
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <RouterLink to="/" class="navbar-brand">前台</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active">首頁</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products" class="nav-link active">產品列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/cart" class="nav-link active">購物車</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/login" class="nav-link active">後台登入</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

</template>
