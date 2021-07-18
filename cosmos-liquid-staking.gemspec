# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "cosmos-liquid-staking"
  spec.version       = "0.1.0"
  spec.authors       = ["Alexander Belokon"]
  spec.email         = ["ikatamarinaki@gmail.com"]

  spec.summary       = "Another Jekyll theme"
  spec.homepage      = "https://github.com/katamarinaki/cosmos-liquid-staking"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
