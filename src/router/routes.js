import { routes as auth } from '@/modules/core/auth/'
import { routes as home } from '@/modules/core/home/'
import { routes as course } from '@/modules/widgets/course/'

export default [...home, ...auth, ...course]
