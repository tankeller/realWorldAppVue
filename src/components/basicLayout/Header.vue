<template>
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home'}">conduit</router-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link active" href="">Home</a>
          </li>
          <!-- Only show if signes in -->
          <!-- <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          -->
          <li class="nav-item">
            <router-link class="nav-link" :to="{name : 'register'}" >Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
