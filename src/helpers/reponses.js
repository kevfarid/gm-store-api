/**
 * reponse message
 * @param {Object} res reponse object from express
 * @param {Object} data data to be sent
 * @param {Number} status status code
 * @returns returns response object
 */

export const response = (res, data, status) => {
  return res.status(status).json({
    message: 'OK',
    status,
    data,
  })
}
