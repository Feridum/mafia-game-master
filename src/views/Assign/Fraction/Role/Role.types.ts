import { FractionItem } from 'store/fraction/fraction.types'

export interface RoleProps {
    roleKey: string
    roleValue: string
    type: 'town' | 'mafia' | 'syndicate'
}
