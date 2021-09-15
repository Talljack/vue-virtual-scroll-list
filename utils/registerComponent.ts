import { App, Component } from 'vue'

export default function (app: App, componentName: string, component: Component): void {
  const registered = app.component(componentName)
  if (!registered) {
    app.component(componentName, component)
  }
}