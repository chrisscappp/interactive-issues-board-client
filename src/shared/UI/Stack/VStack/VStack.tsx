import { Flex } from '../Flex/Flex.tsx'
import type { FlexProps } from '../Flex/Flex.tsx'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
	return <Flex direction="column" {...props}/>
}
