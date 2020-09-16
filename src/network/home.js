import {request} from './request'

export function getHomeMutiData() {
  return request({
    url: '/home/multidata'
  })
}
