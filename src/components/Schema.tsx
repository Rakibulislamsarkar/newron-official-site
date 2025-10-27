import Script from 'next/script';

interface SchemaProps {
    children: Record<string, unknown>;
    id?: string;
}

const Schema = ({ children, id }: SchemaProps) => {
    const schemaString = JSON.stringify(children);

    return (
        <Script type="application/ld+json" id={id}>
            {schemaString}
        </Script>
    );
};

export default Schema;