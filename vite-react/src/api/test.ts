import request from '@/utils/request'

export function testApi() {



  return request.get<{ name: string }>('/api/get')
}