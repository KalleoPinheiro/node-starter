export type NodeEnv = 'production' | 'development' | 'test'

export interface IEnvironmentsConfig {
  nodeEnv: NodeEnv
  port: string
  clientUrl: string
}

export const environmentsConfig: IEnvironmentsConfig = {
  nodeEnv: (process.env.NODE_ENV as NodeEnv) ?? 'development',
  port: process.env.PORT ?? '3333',
  clientUrl:
    (process.env.NODE_ENV as NodeEnv) === 'production'
      ? (process.env.CLIENT_URL as string)
      : '*'
}
