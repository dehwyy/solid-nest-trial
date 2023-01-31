import * as path from 'path';

export default function resolveEnvPath(dir, env) {
  return path.resolve(dir, '..', '..', 'config', `.${env}.env`);
}
