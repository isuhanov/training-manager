type Provider = React.JSXElementConstructor<any>;

interface IProvider {
    Component: Provider;
    props?: any;
}

interface IComposeProviderProps {
    providers: Array<IProvider>;
    children: React.ReactNode;
}

/** Функцяи создания провайдера с его параметрами для компановки
 * @param {Provider} provider - провайдер
 * @param {Object} props - параметры провайдера
 */
export const createProvider = (provider: Provider, props = {}) => ({
    Component: provider, 
    props
});

/** Компонент компановки провайдеров */
const ComposeProvider = ({ providers, children }: IComposeProviderProps) => {
    return (
        <>
            {providers.reduce((acc, {Component, props}) => {
                return <Component {...props}>{acc}</Component>
            }, children)}
        </>
    );
}

export default ComposeProvider;