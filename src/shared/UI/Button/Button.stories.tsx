import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
  	component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const BackgroundDisabled: Story = {
	args: {
		children: 'Text',
		theme: 'background',
		disabled: true
	}
}

export const BackgroundSmall: Story = {
	args: {
		children: 'Text',
		theme: 'background',
		size: 'size_s'
	}
}

export const BackgroundMedium: Story = {
	args: {
		children: 'Text',
		theme: 'background',
		size: 'size_m'
	}
}

export const BackgroundLarge: Story = {
	args: {
		children: 'Text',
		theme: 'background',
		size: 'size_l'
	}
}

export const BackgroundXLarge: Story = {
	args: {
		children: 'Text',
		theme: 'background',
		size: 'size_xl'
	}
}

export const BackgroundInvertedDisabled: Story = {
	args: {
		children: 'Text',
		theme: 'backgroundInverted',
		disabled: true
	}
}

export const BackgroundInvertedSmall: Story = {
	args: {
		children: 'Text',
		theme: 'backgroundInverted',
		size: 'size_s'
	}
}

export const BackgroundInvertedMedium: Story = {
	args: {
		children: 'Text',
		theme: 'backgroundInverted',
		size: 'size_m'
	}
}

export const BackgroundInvertedLarge: Story = {
	args: {
		children: 'Text',
		theme: 'backgroundInverted',
		size: 'size_l'
	}
}

export const BackgroundInvertedXLarge: Story = {
	args: {
		children: 'Text',
		theme: 'backgroundInverted',
		size: 'size_xl'
	}
}

export const OutlineDisabled: Story = {
	args: {
		children: 'Text',
		theme: 'outline',
		disabled: true
	}
}

export const OutlineSmall: Story = {
	args: {
		children: 'Text',
		theme: 'outline',
		size: 'size_s'
	}
}

export const OutlineMedium: Story = {
	args: {
		children: 'Text',
		theme: 'outline',
		size: 'size_m'
	}
}

export const OutlineLarge: Story = {
	args: {
		children: 'Text',
		theme: 'outline',
		size: 'size_l'
	}
}

export const OutlineXLarge: Story = {
	args: {
		children: 'Text',
		theme: 'outline',
		size: 'size_xl'
	}
}

export const OutlineInvertedSmall: Story = {
	args: {
		children: 'Text',
		theme: 'outlineInverted',
		size: 'size_s'
	}
}

export const OutlineInvertedMedium: Story = {
	args: {
		children: 'Text',
		theme: 'outlineInverted',
		size: 'size_m'
	}
}

export const OutlineInvertedLarge: Story = {
	args: {
		children: 'Text',
		theme: 'outlineInverted',
		size: 'size_l'
	}
}

export const OutlineInvertedXLarge: Story = {
	args: {
		children: 'Text',
		theme: 'outlineInverted',
		size: 'size_xl'
	}
}

export const OutlineInvertedDisabled: Story = {
	args: {
		children: 'Text',
		theme: 'outlineInverted',
		disabled: true
	}
}

export const ClearDisabled: Story = {
	args: {
		children: 'Text',
		theme: 'clear',
		disabled: true
	}
}

export const ClearSmall: Story = {
	args: {
		children: 'Text',
		theme: 'clear',
		size: 'size_s'
	}
}

export const ClearMedium: Story = {
	args: {
		children: 'Text',
		theme: 'clear',
		size: 'size_m'
	}
}

export const ClearLarge: Story = {
	args: {
		children: 'Text',
		theme: 'clear',
		size: 'size_l'
	}
}

export const ClearXLarge: Story = {
	args: {
		children: 'Text',
		theme: 'clear',
		size: 'size_xl'
	}
}

export const ErrorDisabled: Story = {
	args: {
		children: 'Text',
		theme: 'error',
		disabled: true
	}
}

export const ErrorSmall: Story = {
	args: {
		children: 'Text',
		theme: 'error',
		size: 'size_s'
	}
}

export const ErrorMedium: Story = {
	args: {
		children: 'Text',
		theme: 'error',
		size: 'size_m'
	}
}

export const ErrorLarge: Story = {
	args: {
		children: 'Text',
		theme: 'error',
		size: 'size_l'
	}
}

export const ErrorXLarge: Story = {
	args: {
		children: 'Text',
		theme: 'error',
		size: 'size_xl'
	}
}

export const ErrorOutlineDisabled: Story = {
	args: {
		children: 'Text',
		theme: 'errorOutline',
		disabled: true
	}
}

export const ErrorOutlineSmall: Story = {
	args: {
		children: 'Text',
		theme: 'errorOutline',
		size: 'size_s'
	}
}

export const ErrorOutlineMedium: Story = {
	args: {
		children: 'Text',
		theme: 'errorOutline',
		size: 'size_m'
	}
}

export const ErrorOutlineLarge: Story = {
	args: {
		children: 'Text',
		theme: 'errorOutline',
		size: 'size_l'
	}
}

export const ErrorOutlineXLarge: Story = {
	args: {
		children: 'Text',
		theme: 'errorOutline',
		size: 'size_xl'
	}
}

export const ApproveDisabled: Story = {
	args: {
		children: 'Text',
		theme: 'approve',
		disabled: true
	}
}

export const ApproveSmall: Story = {
	args: {
		children: 'Text',
		theme: 'approve',
		size: 'size_s'
	}
}

export const ApproveMedium: Story = {
	args: {
		children: 'Text',
		theme: 'approve',
		size: 'size_m'
	}
}

export const ApproveLarge: Story = {
	args: {
		children: 'Text',
		theme: 'approve',
		size: 'size_l'
	}
}

export const ApproveXLarge: Story = {
	args: {
		children: 'Text',
		theme: 'approve',
		size: 'size_xl'
	}
}

export const ApproveOutlineDisabled: Story = {
	args: {
		children: 'Text',
		theme: 'approveOutline',
		disabled: true
	}
}

export const ApproveOutlineSmall: Story = {
	args: {
		children: 'Text',
		theme: 'approveOutline',
		size: 'size_s'
	}
}

export const ApproveOutlineMedium: Story = {
	args: {
		children: 'Text',
		theme: 'approveOutline',
		size: 'size_m'
	}
}

export const ApproveOutlineLarge: Story = {
	args: {
		children: 'Text',
		theme: 'approveOutline',
		size: 'size_l'
	}
}

export const ApproveOutlineXLarge: Story = {
	args: {
		children: 'Text',
		theme: 'approveOutline',
		size: 'size_xl'
	}
}
