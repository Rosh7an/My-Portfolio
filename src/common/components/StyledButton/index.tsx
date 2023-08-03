import clsx from "clsx";

import ButtonBase, { ButtonBaseProps, touchRippleClasses } from "@mui/material/ButtonBase";
import { alpha, styled } from "@mui/material/styles";

export const styledButtonVariants = ["contained", "outlined"] as const;
export type StyledButtonVariant = typeof styledButtonVariants[number];

export const styledButtonColors = [
	"primary",
	"secondary",
	"success",
	"error",
	"info",
	"neutral",
	"warning",
] as const;
export type StyledButtonColor = typeof styledButtonColors[number];

type StyledButtonCustomProps = {
	/**
	 * Style variant of button.
	 *
	 * @default "contained"
	 */
	variant?: StyledButtonVariant;

	/**
	 * The color of the component.
	 * @default "primary"
	 */
	color?: StyledButtonColor;

	/** button label */
	label?: string;

	/** disable focus ripple */
	disableFocusRipple?: boolean;
};
export type StyledButtonProps = ButtonBaseProps<"button", StyledButtonCustomProps>;

export const styledButtonClasses = {
	/** class applied to root element of styled button */
	root: "StyledButton-root",
	/** class applied to root element of styled button for contained variant */
	contained: "StyledButton-contained",
	/** class applied to root element of styled button for outlined variant */
	outlined: "StyledButton-outlined",
} as const;

const defaultStyledButtonProps = {
	color: "primary",
	variant: "contained",
} as Required<StyledButtonCustomProps>;

/** Button styled from MUI button base with minimal base styles */
export default styled(
	({ variant, color, label, children, disableFocusRipple, ...props }: StyledButtonProps) => (
		<ButtonBase
			focusRipple={!disableFocusRipple}
			{...props}
			className={clsx(
				styledButtonClasses.root,
				{
					[styledButtonClasses.contained]: variant === "contained",
					[styledButtonClasses.outlined]: variant === "outlined",
				},
				color ? `StyledButton-${color}` : defaultStyledButtonProps.color,
				props.className,
			)}
		>
			{label ?? children}
		</ButtonBase>
	),
	{
		name: "StyledButton",
	},
)(
	({
		theme,
		variant = defaultStyledButtonProps.variant,
		color = defaultStyledButtonProps.color,
	}) => ({
		borderRadius: 10,
		padding: "8px 30px",

		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "normal",
		fontStretch: "normal",
		fontSize: 16,
		lineHeight: 1.5,
		letterSpacing: 0,

		color: theme.palette[color].main,

		...(variant === "outlined" && {
			backgroundColor: alpha(theme.palette[color].main, 0.15),

			border: `2px solid ${alpha(theme.palette[color].main, 0.3)}`,
			[`&>.${touchRippleClasses.root}`]: { margin: -2 },

			[`&:hover`]: {
				backgroundColor: alpha(theme.palette[color].dark, 0.15),
			},
		}),

		...(variant === "contained" && {
			backgroundColor: alpha(theme.palette[color].main, 0.3),

			[`&:hover`]: {
				backgroundColor: alpha(theme.palette[color].dark, 0.3),
			},
		}),
	}),
);
