import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'rounded-3xl py-2 text-white w-80 font-sm',
   {
    variants: {
    intent: {
      primary: 'bg-blue-700',
      secondary:'bg-black',
      danger:'bg-red-600'
    },
    defaultVariants: {
      intent: 'primary',
    },
    },
   }
)

interface ButtonProps extends VariantProps<typeof buttonStyles>{
   text: string,
}

export default function Button({intent, text, ...props}: ButtonProps) {

  return (
    <button
    className={buttonStyles({intent})}
    {...props}>
      {text}
    </button>
    )
}