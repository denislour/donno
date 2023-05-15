<template>
  <Navbar>
    <template #logo>
      <NavbarLogo
        link="https://www.google.com/"
        alt="Flowbite logo"
        image-url="https://flowbite.com/docs/images/logo.svg"
      >
        Flowbite
      </NavbarLogo>
    </template>
    <template #default="{ isShowMenu }">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <NavbarLink isActive link="#">Home</NavbarLink>
        <NavbarLink link="#">Services</NavbarLink>
        <NavbarLink link="#">Pricing</NavbarLink>
        <NavbarLink link="#">Contact</NavbarLink>
      </NavbarCollapse>
    </template>
  </Navbar>
</template>

<script setup lang="ts">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from "flowbite-vue";
</script>
