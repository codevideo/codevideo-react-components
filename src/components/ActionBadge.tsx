import React from 'react';
import { Badge, Flex, Text } from '@radix-ui/themes';
import { AllActions } from '@fullstackcraftllc/codevideo-types';
import { getBadgeColor } from '../utils/getBadgeColor';

export interface ActionBadgeProps {
    actionName: AllActions;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'solid' | 'outline' | 'soft';
    className?: string;
    onClick?: () => void;
}

export const ActionBadge: React.FC<ActionBadgeProps> = ({
    actionName,
    size = 'md',
    variant = 'soft',
    className,
    onClick,
}) => {
    // Get badge color based on action type
    const color: any = getBadgeColor(actionName);

    // Determine text size based on badge size
    const textSize = size === 'sm' ? '1' : size === 'md' ? '2' : '3';

    // Determine badge size
    const badgeSize = size === 'sm' ? '1' : size === 'lg' ? '3' : '2';

    return (
        <Badge
            size={badgeSize}
            color={color}
            variant={variant}
            className={className}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            <Flex gap="1" align="center">
                <Text size={textSize} weight="medium">
                    {actionName}
                </Text>
            </Flex>
        </Badge>
    );
};

export default ActionBadge;