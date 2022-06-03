package org.hibernate.tool.api.metadata;

import org.hibernate.boot.Metadata;

import java.util.Properties;

public interface MetadataDescriptor {

	Metadata createMetadata();

	Properties getProperties();

}
