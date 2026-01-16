# Contributing to BioDatawala Platform

Thank you for your interest in contributing to BioDatawala! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/biodatawala-platform.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes thoroughly
6. Commit with clear messages: `git commit -m "feat: add new feature"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

## Development Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## Code Style

- Use TypeScript for all new files
- Follow the existing code structure
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add comments for complex logic
- Ensure code passes ESLint checks

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Include tests if applicable
- Update documentation as needed
- Ensure all tests pass
- Link related issues in the PR description
- Request review from maintainers

## Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/OS information
- Error messages or console logs

## Feature Requests

For feature requests:

- Clearly describe the feature
- Explain the use case
- Consider implementation details
- Check if similar requests exist

## Code of Conduct

Be respectful and inclusive. We're all here to build something great together!

## Questions?

Feel free to open an issue for questions or reach out to the maintainers.

Thank you for contributing! 🚀
