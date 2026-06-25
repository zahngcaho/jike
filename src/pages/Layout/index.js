import requset from '@/utils/request'
import { useEffect } from 'react'
const Layout = () => {
  useEffect(() => {
    requset.get('/user/profile')
  })
  return <div>this is layout</div>
}
export default Layout