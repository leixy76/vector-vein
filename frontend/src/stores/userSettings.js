/**
 * @Author: Bi Ying
 * @Date:   2022-12-01 17:43:11
 * @Last Modified by:   Bi Ying
 * @Last Modified time: 2024-07-13 16:40:38
 */
import { defineStore } from "pinia"
import { settingAPI } from "@/api/user"

let userLanguage = navigator.language
if (userLanguage.startsWith('zh')) {
  userLanguage = 'zh-CN'
} else if (userLanguage.startsWith('en')) {
  userLanguage = 'en-US'
} else {
  userLanguage = 'en-US'
}

const getVueFlowStyleSettingsFromLocalStoreage = () => {
  const defaultStyleSettings = {
    edge: {
      type: 'default',
      animated: true,
      style: {
        strokeWidth: 3,
        stroke: '#28c5e5',
      },
    },
  }
  try {
    const localStyleSettings = JSON.parse(localStorage.getItem("userSettings.vueFlowStyleSettings"))
    return localStyleSettings || defaultStyleSettings
  } catch (err) {
    return defaultStyleSettings
  }
}

const getValidLanguage = () => {
  let language = localStorage.getItem("userSettings.language") || userLanguage || 'zh-CN'
  if (!['zh-CN', 'en-US'].includes(language)) {
    language = import.meta.env.VITE_APP_DEFAULT_LANG
  }
  return language
}

const getPopoverRecords = () => {
  try {
    return JSON.parse(localStorage.getItem("userSettings.popoverRecords")) || {}
  } catch (err) {
    return {}
  }
}

export const useUserSettingsStore = defineStore('userSettings', {
  state: () => ({
    theme: 'default',
    language: getValidLanguage(),
    setting: {},
    tourVersion: 0,
    vueFlowStyleSettings: getVueFlowStyleSettingsFromLocalStoreage(),
    workflowDisplayPreference: localStorage.getItem("userSettings.workflowDisplayPreference") || 'card',
    popoverRecords: getPopoverRecords(),
  }),
  actions: {
    setTheme(theme) {
      this.theme = theme
    },
    setLanguage(language) {
      this.language = language
      localStorage.setItem("userSettings.language", language)
    },
    setSetting(setting) {
      this.setting = setting
      localStorage.setItem("userSettings.setting", JSON.stringify(setting))
    },
    setTourVersion(tourVersion) {
      this.tourVersion = tourVersion
      localStorage.setItem("userSettings.tourVersion", tourVersion)
    },
    setVueFlowStyleSettings(vueFlowStyleSettings) {
      this.vueFlowStyleSettings = vueFlowStyleSettings
      localStorage.setItem("userSettings.vueFlowStyleSettings", JSON.stringify(this.vueFlowStyleSettings))
    },
    setWorkflowDisplayPreference(workflowDisplayPreference) {
      this.workflowDisplayPreference = workflowDisplayPreference
      localStorage.setItem("userSettings.workflowDisplayPreference", workflowDisplayPreference)
    },
    popoverShowable(key) {
      return !this.popoverRecords[key]
    },
    setPopoverShown(key) {
      this.popoverRecords[key] = true
      localStorage.setItem("userSettings.popoverRecords", JSON.stringify(this.popoverRecords))
    },
    async init() {
      try {
        const res = await settingAPI('get', {})
        this.setSetting(res.data)
        this.setLanguage(res.data.language || 'en-US')
        this.setTheme(res.data.theme || 'default')
      } catch (err) {
        console.error("Failed to initialize user settings:", err)
      }
    },
  },
})