export const CircularImg = ({avatarUrl}) =>
{
    return (
        <img
            className="h-12 w-12 rounded-full object-cover object-center"
            src={avatarUrl}
            alt="nature image"
        />
    );
}