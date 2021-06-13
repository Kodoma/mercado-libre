import React from "react";

const useHasMounted = () => {
    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted;
}

export default useHasMounted;