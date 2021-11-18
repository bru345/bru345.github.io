import * as THREE from 'three';
import metaversefile from 'metaversefile';
const {useApp} = metaversefile;

export default () => {
  const app = useApp();
  app.name = 'decal';
  console.log("Hello", app)
  return app;
};