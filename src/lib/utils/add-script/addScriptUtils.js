const hasSrc = src => document.querySelector(`[src="${src}"] `)

const createScriptTag = attributes => {
  const scriptTag = document.createElement("script")
  Object.entries(attributes).forEach(
    ([key, value]) => (scriptTag[key.toLowerCase()] = value),
  )
  return scriptTag
}

export const addScript = (target, attributes, options = {}) => {
  const { ifNotExists = false } = options
  console.log("attributes.src", attributes.src)
  if (ifNotExists && hasSrc(attributes.src)) return

  const scriptTag = createScriptTag(attributes)

  target.appendChild(scriptTag)
  return scriptTag
}
