export const getBaseUrl = () =>
    process.env.REACT_APP_NODE_ENV === 'production'
        ? process.env.REACT_APP_PROD_API
        : process.env.REACT_APP_NODE_ENV === 'staging'
        ? process.env.REACT_APP_STAGING_API
        : process.env.REACT_APP_DEV_API;

export const getUploadUrl = () =>
    process.env.REACT_APP_NODE_ENV === 'production'
        ? process.env.REACT_APP_PROD_UPLOAD_PATH
        : process.env.REACT_APP_NODE_ENV === 'staging'
        ? process.env.REACT_APP_STAGING_UPLOAD_PATH
        : process.env.REACT_APP_DEV_UPLOAD_PATH;
