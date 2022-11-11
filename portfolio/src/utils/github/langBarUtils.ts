export const getClassName = (lang: string) => {
  switch (lang.toLowerCase()) {
    case 'java':
      return 'java'
    case 'css':
      return 'css'
    case 'javascript':
      return 'javascript'
    case 'scss':
      return 'scss'
    case 'svelte':
      return 'svelte'
    case 'html':
      return 'html'
    case 'typescript':
      return 'typescript'
    case 'handlebars':
      return 'handlebars'
    default:
      return 'other'
  }
}

export const getPercentage = (total: number, sub: number) => {
  const rate = sub / total
  return rate * 100
}
