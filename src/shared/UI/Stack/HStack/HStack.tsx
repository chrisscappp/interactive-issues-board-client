import { Flex } from '../Flex/Flex.tsx'
import type { FlexProps } from '../Flex/Flex.tsx'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
	return <Flex direction="row" {...props}/>
}
