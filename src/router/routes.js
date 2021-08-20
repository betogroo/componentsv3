import { routes as auth } from '@/modules/core/auth/'
import { routes as home } from '@/modules/core/home/'
import { routes as chat } from '@/modules/widgets/chat/'

export default [...home, ...chat, ...auth]
