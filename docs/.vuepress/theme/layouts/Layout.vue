<template>
  <v-app>
    <v-app-bar dark color="black" dense fixed app clipped-left>
        <v-toolbar-title>
            Test
        </v-toolbar-title>
    </v-app-bar>
    <v-content>
            <v-row>
        <v-col v-for="(item,i) in test" :key="i">
            <v-card>
                {{item}}
            </v-card>
        </v-col>
    </v-row>
      <Content/>
    </v-content>

    <v-footer color="black" height="auto">
      <v-container>
        <v-row no-gutters justify="space-between" class="pb-4">
          <v-col v-for="footerItem in footer" :key="footerItem.event" cols="4">
            <v-row justify="center">
              <v-btn
                color="white"
                text
                @click="$emit('footer-item-clicked', footerItem.event)"
              >
                {{ footerItem.text }}
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <span class="white--text  caption">
          TEST TEST
        </span>

        <span class="white--text caption">
          TEST TEST.
        </span>
        <span class="white--text  caption">
          {{ appVersion }}
        </span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      footer: [
        { event: "test1", text: "test1" },
        { event: "test2", text: "test2" },
        { event: "test2", text: "test3" },
        { event: "test3", text: "test4" },
        { event: "test4", text: "test5" },
        { event: "test5", text: "test6" }
      ],
      test: [
        "test1",
        "test2",
        "test3",
        "test1",
        "test2",
        "test3",
        "test1",
        "test2",
        "test3",
        "test1",
        "test2",
        "test3",
      ]
    }
  },
  methods: {
  }
}
</script>
