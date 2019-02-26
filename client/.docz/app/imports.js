export const imports = {
  'src/components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-button" */ 'src/components/Button/Button.mdx'),
  'src/components/Card/Card.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-card-card" */ 'src/components/Card/Card.mdx'),
  'src/components/CreateExerciseForm/CreateExerciseForm.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-exercise-form-create-exercise-form" */ 'src/components/CreateExerciseForm/CreateExerciseForm.mdx'),
  'src/components/CustomSelect/CustomSelect.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-custom-select-custom-select" */ 'src/components/CustomSelect/CustomSelect.mdx'),
  'src/components/Input/Input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-input-input" */ 'src/components/Input/Input.mdx'),
  'src/components/PageHeading/PageHeading.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-page-heading-page-heading" */ 'src/components/PageHeading/PageHeading.mdx'),
  'src/components/SidebarMenuItem/SidebarMenuItem.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-sidebar-menu-item-sidebar-menu-item" */ 'src/components/SidebarMenuItem/SidebarMenuItem.mdx'),
  'src/components/TextArea/TextArea.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-text-area-text-area" */ 'src/components/TextArea/TextArea.mdx'),
}
