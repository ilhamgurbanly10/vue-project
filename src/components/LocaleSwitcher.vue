<template>
    <ul>
      <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
        {{locale}}
      </li>
    </ul>
</template>

<script>

    export default {

        name: 'LocaleSwitcher',
        methods: { // <---------------------------
            switchLocale(locale) {
            if (this.$i18n.locale !== locale) {
                this.$i18n.locale = locale;
                localStorage.setItem('locale',locale);
            }
            }
        },
        data() {
            return {
                locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
            }
        },
        beforeCreate() {
            const locale = localStorage.getItem('locale');
            locale != "" ? this.$i18n.locale = locale : this.$i18n.locale = process.env.VUE_APP_I18N_LOCALE;

        }
    }

</script>