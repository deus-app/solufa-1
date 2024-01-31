export const UserIcon = (props: { size: number; photoURL: string | undefined }) => {
  return (
    props.photoURL !== undefined && (
      <div
        style={{
          width: `${props.size}px`,
          height: `${props.size}px`,
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img src={props.photoURL} style={{ width: '100%' }} />
      </div>
    )
  );
};
