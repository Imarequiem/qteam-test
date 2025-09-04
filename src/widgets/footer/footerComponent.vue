<template>
  <UFooter class="footer">
    <UFooterTop>
      <UContainer :ui="{ padding: 'px-0' }" class="footer__top">
        <div class="footer__inner">
          <footerContactCta />
          <footerContactList />
        </div>
      </UContainer>
    </UFooterTop>

    <UFooterBottom class="footer__bottom">
      <UContainer :ui="{ padding: 'px-0' }">
        <footerSocialBar />
      </UContainer>
      <footerBigButton class="absolute -bottom-50 left-1/2 -translate-x-1/2" />
    </UFooterBottom>
  </UFooter>
</template>

<script setup lang="ts">
import footerContactCta from './footerContactCta/footerContactCta.vue'
import footerContactList from './footerContactList/footerContactList.vue'
import footerSocialBar from './footerSocialBar/footerSocialBar.vue'
import footerBigButton from './footerBigButton/footerBigButton.vue'
</script>

<style scoped>
.footer {
  height: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--main-pink);
  padding: 140px 112px 0 112px;
}

.footer__inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer__bottom {
  height: 179px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
}

@media (width >= 64rem) {
  .lg\:px-8 {
    padding-inline: 0 !important;
  }
}
</style>