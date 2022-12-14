import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export type Anchor = "bottom" | "left";

type FragmenStackBehaviorProps = {
  render: React.ReactNode;
  open: boolean;
  anchor: Anchor;
};

type FragmenStackConsumerProps = {
  children: ReactNode;
};

type InitialContextProps = {
  setFragmentStack: Dispatch<SetStateAction<FragmenStackBehaviorProps>>;
  fragmentStack: FragmenStackBehaviorProps;
};

export const NotificationContext = createContext<InitialContextProps>(
  {} as InitialContextProps
);

export function useFragmentStack() {
  return useContext(NotificationContext);
}

export function FragmenStackConsumer({ children }: FragmenStackConsumerProps) {
  const [fragmentStack, setFragmentStack] = useState(
    {} as FragmenStackBehaviorProps
  );

  const value = {
    fragmentStack,
    setFragmentStack,
  };
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
