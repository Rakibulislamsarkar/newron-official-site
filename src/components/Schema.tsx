import Script from 'next/script';

const Schema = ({ children, id }: any) => {

    const schemaString = JSON.stringify(children);

    return <Script type="application/ld+json" id={id}>
        {schemaString}
    </Script>

}

export default Schema;