function login(username: string): string {
  const user = {
    name: 'Sandeep Mukherjee',
  };
  const fname = user.name;
  return username + fname;
}

login('sandeepmukherjee');
