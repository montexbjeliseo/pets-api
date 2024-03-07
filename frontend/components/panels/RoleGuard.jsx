export const RoleGuard = ({ children, role }) => {

    const [currentUser, setCurrentUser] = useState(null);

    const token = useSelector((state) => state.auth.token);

    useEffect(async() => {
        
        const response = await fetchUserProfile(token);

        if(response.ok){
            const data = await response.json();
            setCurrentUser(data);
        }
        
    })

    if (!currentUser || currentUser.roles[0].name !== role) {
        return null;
    }

    return children;
}