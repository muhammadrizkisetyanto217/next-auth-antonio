interface HeaderProps {
  headerLabel: string;
}

const Header = ({ headerLabel }: HeaderProps) => {
  return (
    <div className="flex flex-col w-full gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-bold">🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{headerLabel}</p>
    </div>
  );
};

export default Header;
