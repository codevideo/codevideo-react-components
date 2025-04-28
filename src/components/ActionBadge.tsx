import React from 'react';
import { Badge, Flex, Text } from '@radix-ui/themes';
import { AllActions } from '@fullstackcraftllc/codevideo-types';
import { getBadgeColor } from '../utils/getBadgeColor';

export interface ActionBadgeProps {
    actionName: AllActions;
    variant?: 'solid' | 'outline' | 'soft';
    className?: string;
    onClick?: () => void;
}

export const ActionBadge: React.FC<ActionBadgeProps> = ({
    actionName,
    variant = 'soft',
    className,
    onClick,
}) => {
    // Get badge color based on action type
    const color: any = getBadgeColor(actionName);

    return (
        <Badge
            color={color}
            variant={variant}
            className={className}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default', fontFamily: 'Fira Code, monospace' }}
        >
            <Flex gap="1" align="center">
                <Text size="1" weight="medium">
                    {actionName}
                </Text>
            </Flex>
        </Badge>
    );
};

export default ActionBadge;