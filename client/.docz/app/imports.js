export const imports = {
  'src/components/CreateExerciseForm/CreateExerciseForm.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-exercise-form-create-exercise-form" */ 'src/components/CreateExerciseForm/CreateExerciseForm.mdx'),
  'src/components/TextInput/TextInput.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-text-input-text-input" */ 'src/components/TextInput/TextInput.mdx'),
}
