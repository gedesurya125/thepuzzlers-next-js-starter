import { Box, GridWrapper, Heading, Section } from 'theme/components';

export default function Home() {
  return (
    <Box as="main">
      <Section>
        <Heading
          sx={{
            variant: 'text.primary-135-normal',
            gridColumn: ['1/13']
          }}>
          Hello asdf asdf asdf asdf asdf
        </Heading>
      </Section>
    </Box>
  );
}
