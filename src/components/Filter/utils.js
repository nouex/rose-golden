export const findSettingByKey = (settings, key) => {
  if (Array.isArray(key)) {
     return settings.find(
       setting => Array.isArray(setting.key) && setting.key.join("") === key.join("")
     )
  } else {
    return settings.find(setting => setting.key === key)
  }
}
 
