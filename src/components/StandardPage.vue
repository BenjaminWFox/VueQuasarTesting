<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout>
    <q-toolbar slot="header">
      <!-- opens drawer below
      <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      -->
      <q-toolbar-title>
        My Quasar App
      </q-toolbar-title>
      <q-tabs slot="navigation">
        <q-route-tab slot="title" icon="library_books" to="/forms/" replace hide="icon" label="All Forms" />
        <q-route-tab slot="title" icon="local_pizza" to="/forms/pizza" replace hide="icon" label="Pizza" />
        <q-route-tab slot="title" icon="cake" to="/forms/desserts" replace label="Desserts" />
        <q-route-tab slot="title" icon="local_florist" to="/forms/flowers" replace label="Flowers" />
      </q-tabs>
    </q-toolbar>
    <SimpleText />
    <!-- Left Side Panel
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item>
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item>
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>
    -->

    <!-- Right Side Panel
    <div slot="right">
      ...
    </div>
    -->

    <router-view />

    <q-toolbar slot="footer">
      The current time is: {{ TheTime }}
    </q-toolbar>
  </q-layout>
</template>

<script>

import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRouteTab
} from 'quasar'
import SimpleText from './SimpleText'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    SimpleText
  },
  name: 'StandardPage',
  data () {
    return {}
  },
  computed: {
    TheTime () {
      return this.$store.state.time
    }
  }
}
</script>

<style>
</style>
