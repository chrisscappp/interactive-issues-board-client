import { Flex, type FlexProps } from '../Flex/Flex.tsx'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
	return <Flex direction="row" {...props}/>
}
