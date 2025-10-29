declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T
}
