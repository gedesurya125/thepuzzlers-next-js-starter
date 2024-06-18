export const assignParamsToPathname = (
  locale,
  pathPatterns,
  params,
  systemPath
) => {
  let translatedPath = `/${locale}${pathPatterns[locale]}`;
  let translatedPathWithoutLocale = `${pathPatterns[locale]}`;
  let pathForRevalidation = `/${locale}${systemPath}`; //? it mean not translated path
  // ? assign the params values
  if (params) {
    const paramKeys = Object.keys(params);
    paramKeys.forEach((paramKey) => {
      const paramValue = params[paramKey][locale] ?? params[paramKey]; // ? in case params don't have any locale

      const paramsValueToAssign =
        typeof paramValue === 'string' ? paramValue : '';

      // ? Skip the translated path generation due to missing slug
      if (!paramsValueToAssign) {
        translatedPath = null;
        translatedPathWithoutLocale = null;
        pathForRevalidation = null;
        return;
      }

      translatedPath = translatedPath.replace(
        `[${paramKey}]`,
        paramsValueToAssign
      );
      translatedPathWithoutLocale = translatedPathWithoutLocale.replace(
        `[${paramKey}]`,
        paramsValueToAssign
      );

      pathForRevalidation = pathForRevalidation?.replace(
        `[${paramKey}]`,
        paramsValueToAssign
      );
    });
  }
  return {
    locale,
    path: translatedPath,
    translatedPathWithoutLocale,
    pathForRevalidation
  };
};
