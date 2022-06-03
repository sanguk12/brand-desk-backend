package org.hibernate.tool.api.metadata;

import org.hibernate.tool.api.reveng.ReverseEngineeringStrategy;
import org.hibernate.tool.internal.metadata.JdbcMetadataDescriptor;

import java.util.Properties;

public class MetadataDescriptorFactory {

	public static MetadataDescriptor createJdbcDescriptor(
			ReverseEngineeringStrategy reverseEngineeringStrategy,
			Properties properties,
			boolean preferBasicCompositeIds) {
		return new JdbcMetadataDescriptor(
				reverseEngineeringStrategy,
				properties,
				preferBasicCompositeIds);
	}

}
