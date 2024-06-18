import { Box, Heading } from 'theme/components';

export default function Home() {
  return (
    <Box as="main">
      <Heading
        sx={{
          variant: 'text.primary-135-normal'
        }}>
        Hello
      </Heading>
    </Box>
  );
}
