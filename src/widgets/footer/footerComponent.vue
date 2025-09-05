<template>
  <u-footer class="footer">
    <u-footer-top>
      <u-container :ui="{ padding: 'px-0' }" class="footer__top">
        <div class="footer__inner">
          <footer-contact-cta />

          <footer-contact-list />
        </div>
      </u-container>
    </u-footer-top>

    <u-footer-bottom class="footer__bottom">
      <UContainer :ui="{ padding: 'px-0' }">
        <footer-social-bar />
      </UContainer>

      <footer-big-button class="absolute -bottom-50 left-1/2 -translate-x-1/2" />
    </u-footer-bottom>
  </u-footer>
</template>

<script setup lang="ts">
import footerContactCta from '@/widgets/footer/footerContactCta/footerContactCta.vue'
import footerContactList from '@/widgets/footer/footerContactList/footerContactList.vue'
import footerSocialBar from '@/widgets/footer/footerSocialBar/footerSocialBar.vue'
import footerBigButton from '@/widgets/footer/footerBigButton/footerBigButton.vue'
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